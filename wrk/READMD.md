1.wrk 로컬 점검시 결과에 아래와 같이 "connect 에러가 많은 경우"
  - wrk 결과 : Socket errors: connect 5, read 0, write 0, timeout 0
  - 파일리밋 조회 : ulimit -n  (보통 256임)
  - 파일리밋 늘리기 (  https://gist.github.com/skylock/0117ec637d468f91260927b43b816eda )
    1. root 계정을 활성화하고
    2. root 계정으로 접속해서 max늘리기


2. 예시
  >  wrk -t 10 -c 10 -d 10s -s post1.lua http://localhost:8090/c.g/bo_main_v3.php
  >  wrk -t 10 -c 10 -d 10s -s get1.lua http://localhost:8090/c.g/bo_main_v3.php
  >  wrk -t 10 -c 10 -d 10s -s post1.lua http://localhost:8052/newToken/?req_token=9bba4f5b-b3f8-4e78-89b2-ab84503bb79b
  >  wrk -t 10 -c 10 -d 10s -s post1.lua http://localhost:18052/o.s/os2ctl.php?req_token=9bba4f5b-b3f8-4e78-89b2-ab84503bb79b
    -t 스레드갯수
    -c 컨커런트갯수
    -d 실행시간(초)
    -s lua설정파일

  > wrk -t 10 -c 10 -d 10s -s workerman.lua http://localhost:9081/
  > wrk -t 10 -c 10 -d 10s -s swoole.lua http://localhost:9082/
  > wrk -t 10 -c 10 -d 10s -s phpfpm.lua http://localhost:9080/d.s/demo_perf_phpfpm.php


3. 결과
- 환경 : swoole, workerman의 워커는 10개
- swoole 첫 2회 호출은 오류가 남 (처음시작하고 나서 2번, 그러면 시작하자 마자 본인이 본인 2번호출해야하나?)
- workerman은 안정적이고, 서비스 시작/종료 모니터링이 용이
- phpfpm도 느리진 않고 안정적임
YOUNGui-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s swoole.lua http://localhost:9082/
Running 20s test @ http://localhost:9082/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    98.24ms  121.00ms   1.17s    95.30%
    Req/Sec    13.11      5.99    40.00     68.65%
  3400 requests in 20.11s, 58.30MB read
  Socket errors: connect 6, read 0, write 0, timeout 0
Requests/sec:    169.09
Transfer/sec:      2.90MB
Response count: 0
YOUNGui-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s swoole.lua http://localhost:9082/
Running 20s test @ http://localhost:9082/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    66.44ms   26.83ms 280.98ms   76.30%
    Req/Sec    15.14      5.98    40.00     76.18%
  3927 requests in 20.10s, 67.34MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    195.39
Transfer/sec:      3.35MB
Response count: 0
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s workerman.lua http://localhost:9081/
Running 20s test @ http://localhost:9081/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    83.48ms   69.06ms 966.11ms   90.83%
    Req/Sec    14.11      7.62    40.00     78.20%
  3313 requests in 20.10s, 56.70MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    164.83
Transfer/sec:      2.82MB
Response count: 0
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s workerman.lua http://localhost:9081/
Running 20s test @ http://localhost:9081/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   103.04ms  127.46ms   1.17s    96.05%
    Req/Sec    13.01      7.56    40.00     73.21%
  3200 requests in 20.09s, 54.77MB read
  Socket errors: connect 6, read 0, write 0, timeout 0
Requests/sec:    159.27
Transfer/sec:      2.73MB
Response count: 0
YOUNGui-Air:wrk zeroone$ wrk -t 10 -c 10 -d 10s -s phpfpm.lua http://localhost:9080/d.s/demo_perf_phpfpm.php
Running 10s test @ http://localhost:9080/d.s/demo_perf_phpfpm.php
  10 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    66.81ms   26.92ms 228.02ms   80.00%
    Req/Sec    15.16      6.01    30.00     76.20%
  1058 requests in 10.09s, 18.42MB read
  Socket errors: connect 3, read 0, write 0, timeout 0
Requests/sec:    104.82
Transfer/sec:      1.82MB
Response count: 0
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ wrk -t 10 -c 10 -d 10s -s phpfpm.lua http://localhost:9080/d.s/demo_perf_phpfpm.php
Running 10s test @ http://localhost:9080/d.s/demo_perf_phpfpm.php
  10 threads and 10 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    60.05ms   20.19ms 242.70ms   81.80%
    Req/Sec    16.67      5.73    30.00     60.46%
  1347 requests in 10.09s, 23.45MB read
  Socket errors: connect 2, read 0, write 0, timeout 0
Requests/sec:    133.44
Transfer/sec:      2.32MB
Response count: 0
YOUNGui-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s phpfpm.lua http://localhost:9080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:9080/d.s/demo_perf_phpfpm.php
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   183.82ms  191.65ms   1.30s    92.44%
    Req/Sec     7.94      3.33    20.00     73.09%
  1808 requests in 20.09s, 31.47MB read
  Socket errors: connect 6, read 0, write 0, timeout 0
Requests/sec:     89.99
Transfer/sec:      1.57MB
Response count: 0
YOUNGui-Air:wrk zeroone$ 
YOUNGui-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s phpfpm.lua http://localhost:9080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:9080/d.s/demo_perf_phpfpm.php
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   135.34ms  159.79ms   1.17s    94.42%
    Req/Sec    10.15      3.79    20.00     79.86%
  2360 requests in 20.10s, 41.09MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    117.41
Transfer/sec:      2.04MB
Response count: 0
YOUNGui-Air:wrk zeroone$ 







3. 결과2( 2021.3.13)
 - php 8.0.3fpm-alpine
 - swoole 4.6.4
 - workerman 4.0 (workman/mysql 1.0)


#############
##  swoole (wrk -t 20 -c 20 -d 20s -s swoole.lua http://localhost:19082/)
#############

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s swoole.lua http://localhost:19082/
Running 20s test @ http://localhost:19082/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    72.45ms   45.39ms 475.83ms   88.46%
    Req/Sec    14.80      6.60    30.00     88.34%
  3402 requests in 20.11s, 59.35MB read
  Socket errors: connect 8, read 0, write 0, timeout 0
Requests/sec:    169.21
Transfer/sec:      2.95MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s swoole.lua http://localhost:19082/
Running 20s test @ http://localhost:19082/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   116.42ms  133.26ms   1.19s    93.35%
    Req/Sec    11.58      5.75    30.00     59.34%
  2595 requests in 20.10s, 45.27MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    129.14
Transfer/sec:      2.25MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s swoole.lua http://localhost:19082/
Running 20s test @ http://localhost:19082/
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   193.00ms  102.54ms   1.05s    77.35%
    Req/Sec    11.61      5.70    40.00     61.42%
  4239 requests in 20.10s, 73.95MB read
Requests/sec:    210.87
Transfer/sec:      3.68MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ 
YOUNGui-MacBook-Air:wrk zeroone$ 
YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s swoole.lua http://localhost:19082/
Running 20s test @ http://localhost:19082/
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   223.67ms  128.74ms   1.23s    82.19%
    Req/Sec    10.51      5.14    30.00     65.08%
  3737 requests in 20.10s, 65.19MB read
Requests/sec:    185.91
Transfer/sec:      3.24MB
Response count: 0


YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 80 -d 20s -s swoole.lua http://localhost:19082/
Running 20s test @ http://localhost:19082/
  20 threads and 80 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   384.39ms  170.43ms   1.46s    72.47%
    Req/Sec    11.66      6.50    40.00     58.21%
  4157 requests in 20.10s, 72.52MB read
  Socket errors: connect 0, read 0, write 0, timeout 5
Requests/sec:    206.82
Transfer/sec:      3.61MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 80 -d 20s -s swoole.lua http://localhost:19082/
Running 20s test @ http://localhost:19082/
  20 threads and 80 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   394.90ms  162.94ms   1.59s    73.96%
    Req/Sec    11.44      6.33    40.00     58.33%
  4065 requests in 20.10s, 70.91MB read
Requests/sec:    202.22
Transfer/sec:      3.53MB
Response count: 0



#############
##  workerman (wrk -t 20 -c 20 -d 20s -s workerman.lua http://localhost:19081/)
#############
YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s workerman.lua http://localhost:19081/
Running 20s test @ http://localhost:19081/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   101.49ms   81.07ms 700.69ms   90.08%
    Req/Sec    12.16      6.62    40.00     54.53%
  3213 requests in 20.09s, 55.95MB read
  Socket errors: connect 5, read 0, write 0, timeout 0
Requests/sec:    159.91
Transfer/sec:      2.78MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s workerman.lua http://localhost:19081/
Running 20s test @ http://localhost:19081/
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   115.90ms  161.76ms   1.51s    93.64%
    Req/Sec    13.36      8.11    40.00     72.03%
  2821 requests in 20.10s, 49.12MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    140.32
Transfer/sec:      2.44MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s workerman.lua http://localhost:19081/
Running 20s test @ http://localhost:19081/
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   368.75ms  302.13ms   1.93s    79.63%
    Req/Sec     8.65      6.07    40.00     74.89%
  2432 requests in 20.10s, 42.35MB read
  Socket errors: connect 0, read 0, write 0, timeout 2
Requests/sec:    121.02
Transfer/sec:      2.11MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s workerman.lua http://localhost:19081/
Running 20s test @ http://localhost:19081/
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   295.77ms  206.32ms   1.70s    79.89%
    Req/Sec     9.04      5.48    40.00     73.18%
  2892 requests in 20.10s, 50.36MB read
Requests/sec:    143.88
Transfer/sec:      2.51MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 80 -d 20s -s workerman.lua http://localhost:19081/
Running 20s test @ http://localhost:19081/
  20 threads and 80 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   460.25ms  253.95ms   1.95s    83.96%
    Req/Sec    10.36      5.86    30.00     64.41%
  3478 requests in 20.10s, 60.56MB read
  Socket errors: connect 0, read 0, write 0, timeout 21
Requests/sec:    173.01
Transfer/sec:      3.01MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 80 -d 20s -s workerman.lua http://localhost:19081/
Running 20s test @ http://localhost:19081/
  20 threads and 80 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   420.04ms  241.13ms   1.90s    72.48%
    Req/Sec    11.20      6.60    40.00     60.42%
  3780 requests in 20.10s, 65.82MB read
  Socket errors: connect 0, read 0, write 0, timeout 15
Requests/sec:    188.03
Transfer/sec:      3.27MB
Response count: 0



#############
##  nginx-phpfpm (wrk -t 20 -c 20 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php)
#############
 wrk -t 20 -c 20 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   162.04ms  124.85ms   1.12s    93.90%
    Req/Sec     7.65      3.07    20.00     72.68%
  1716 requests in 20.10s, 30.39MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:     85.39
Transfer/sec:      1.51MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   138.98ms  135.00ms   1.22s    94.40%
    Req/Sec     9.16      3.65    20.00     74.14%
  2099 requests in 20.09s, 37.17MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    104.48
Transfer/sec:      1.85MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   327.19ms  101.27ms 938.83ms   89.14%
    Req/Sec     6.80      2.78    20.00     41.46%
  2455 requests in 20.09s, 43.48MB read
Requests/sec:    122.21
Transfer/sec:      2.16MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   378.66ms  134.81ms   1.09s    83.62%
    Req/Sec     6.08      2.91    10.00     43.08%
  2123 requests in 20.10s, 37.60MB read
Requests/sec:    105.60
Transfer/sec:      1.87MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 80 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 80 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   967.97ms  301.95ms   2.00s    74.46%
    Req/Sec     6.71      6.09    30.00     86.91%
  1617 requests in 20.09s, 28.64MB read
  Socket errors: connect 0, read 0, write 0, timeout 4
Requests/sec:     80.47
Transfer/sec:      1.43MB
Response count: 0

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 80 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 80 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   921.40ms  364.55ms   2.00s    71.26%
    Req/Sec     6.89      6.32    30.00     86.30%
  1650 requests in 20.10s, 29.22MB read
  Socket errors: connect 0, read 0, write 0, timeout 32
Requests/sec:     82.10
Transfer/sec:      1.45MB
Response count: 0




###############################################################################################################################################
4. 결과3( 2021.5.3)
 - php 8.0.3fpm-alpine
 - swoole 4.6.4
 - workerman 4.0 (workman/mysql 1.0)
 - jit = on

 - php.ini (https://github.com/TechEmpower/FrameworkBenchmarks/blob/master/frameworks/PHP/workerman/php-jit.ini)
  opcache.enable=1
  opcache.enable_cli=1
  opcache.validate_timestamps=0
  opcache.save_comments=0
  opcache.enable_file_override=1
  opcache.huge_code_pages=1

  mysqlnd.collect_statistics = Off

  memory_limit = 512M

  opcache.jit_buffer_size=128M
  opcache.jit=tracing

###############################################################################################################################################
##
## phpfpm
##
YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   208.62ms  184.13ms   1.44s    90.96%
    Req/Sec     6.87      3.15    20.00     87.56%
  1624 requests in 20.07s, 28.27MB read
  Socket errors: connect 5, read 0, write 0, timeout 0
Requests/sec:     80.93
Transfer/sec:      1.41MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s phpfpm.lua http://localhost:19080/d.s/demo_perf_phpfpm.php
Running 20s test @ http://localhost:19080/d.s/demo_perf_phpfpm.php
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   394.75ms  125.64ms 983.69ms   89.19%
    Req/Sec     5.93      2.91    10.00     43.81%
  1962 requests in 20.09s, 34.17MB read
Requests/sec:     97.64
Transfer/sec:      1.70MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 


##
## swoole
##
YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s swoole.lua http://localhost:19082/data
Running 20s test @ http://localhost:19082/data
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    41.95ms   21.54ms 255.83ms   78.04%
    Req/Sec    24.02      9.02    50.00     74.08%
  6063 requests in 20.10s, 103.97MB read
  Socket errors: connect 7, read 0, write 0, timeout 0
Requests/sec:    301.71
Transfer/sec:      5.17MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s swoole.lua http://localhost:19082/data
Running 20s test @ http://localhost:19082/data
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   132.81ms   97.93ms 999.34ms   87.09%
    Req/Sec    17.79      8.62    50.00     66.44%
  6588 requests in 20.09s, 112.98MB read
Requests/sec:    327.90
Transfer/sec:      5.62MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s swoole.lua http://localhost:19082/data
Running 20s test @ http://localhost:19082/data
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   144.84ms  151.42ms   1.21s    94.40%
    Req/Sec    17.89      8.54    60.00     65.79%
  6596 requests in 20.10s, 113.11MB read
Requests/sec:    328.13
Transfer/sec:      5.63MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$

##
## workerman
##
YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 20 -d 20s -s workerman.lua http://localhost:19081/data
Running 20s test @ http://localhost:19081/data
  20 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    43.28ms   37.83ms 414.37ms   88.17%
    Req/Sec    26.21     15.01    90.00     61.19%
  7603 requests in 20.10s, 130.43MB read
  Socket errors: connect 5, read 0, write 0, timeout 0
Requests/sec:    378.33
Transfer/sec:      6.49MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s workerman.lua http://localhost:19081/data
Running 20s test @ http://localhost:19081/data
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   114.61ms   93.04ms 941.92ms   84.28%
    Req/Sec    21.07     12.14    90.00     80.98%
  7841 requests in 20.10s, 134.51MB read
Requests/sec:    390.09
Transfer/sec:      6.69MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 

YOUNGui-MacBook-Air:wrk zeroone$ wrk -t 20 -c 40 -d 20s -s workerman.lua http://localhost:19081/data
Running 20s test @ http://localhost:19081/data
  20 threads and 40 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   100.32ms  122.04ms   1.35s    92.99%
    Req/Sec    27.03     15.29   101.00     67.08%
  10135 requests in 20.09s, 173.86MB read
Requests/sec:    504.36
Transfer/sec:      8.65MB
Response count: 0
YOUNGui-MacBook-Air:wrk zeroone$ 