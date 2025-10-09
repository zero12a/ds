<html>
    <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

    <script>

    function init(){

        var pipe = function(el_name, send) {
            var div  = $(el_name + ' div');
            var inp  = $(el_name + ' input');
            var form = $(el_name + ' form');

            var print = function(m, p) {
                p = (p === undefined) ? '' : JSON.stringify(p);
                div.append($("<code>").text(m + ' ' + p));
                div.scrollTop(div.scrollTop() + 10000);
            };

            if (send) {
                form.submit(function() {
                    send(inp.val());
                    inp.val('');
                    return false;
                });
            }
            return print;
        };

        var ws = new WebSocket('ws://localhost:15674/ws');
        var client = Stomp.over(ws);
        client.debug = pipe('#second');

        /*
    https://www.rabbitmq.com/stomp.html#d
    
    /exchange -- SEND to arbitrary routing keys and SUBSCRIBE to arbitrary binding patterns;
    /queue -- SEND and SUBSCRIBE to queues managed by the STOMP gateway;
    /amq/queue -- SEND and SUBSCRIBE to queues created outside the STOMP gateway;
    /topic -- SEND and SUBSCRIBE to transient and durable topics;
    /temp-queue/ -- create temporary queues (in reply-to headers only).

        */

        var on_connect = function() {
            alog('connected');
            
            client.subscribe("/exchange/logs", on_message);
            client.send("/exchange/logs",{"content-type":"text/plain"}, "hi");

        };
        var on_error =  function() {
            alog('error');
        };

        var on_message = function(message) {
            // called when the client receives a STOMP message from the server
            alog(message)
            if (message.body) {
                alog("got message with body : " + message.body)
            } else {
                alog("got empty message");
            }
            $("#logs").append( message.body + "\n" );

            //$("#logs").scrollTop = $("#logs").scrollHeight;

            logTa = document.getElementById("logs")
            logTa.scrollTop = logTa.scrollHeight;

        };

        client.connect('test', '1234', on_connect, on_error, '/');

    }


    function alog(t){
        if(console)console.log(t);
    }
    </script>
    <body onload="init()">
        stomp_js 2
        <textarea id="logs" style="width:100%;height:100px;font-size: 12px;" readonly></textarea>
        <div id="second" class="box">
            <h2>Logs</h2>
            <div></div>
        </div>

    </body>
</html>
