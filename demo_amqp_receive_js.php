<html>
  <head>
    <script type=module>
      import { AMQPWebSocketClient } from './lib/amqp-websocket-client.mjs'

      //mjs관련 브라우저 오류
      //허용되지 않는 MIME 형식(“application/octet-stream”)이어서 “http://localhost:8040/d.s/lib/amqp-websocket-client.mjs”의 모듈 로드가 차단되었습니다.
      //nginx mime.types에서 application/javascript mjs 추가필요

      const textarea = document.getElementById("textarea")
      const input = document.getElementById("message")

      const tls = window.location.scheme === "https:"
      ///const url = `${tls ? "wss" : "ws"}://${window.location.host}`
      //alog(url)
      const url = "ws://localhost:15674/ws"
      const amqp = new AMQPWebSocketClient(url, "/", "test", "1234")

      async function start() {
        try {
          const conn = await amqp.connect()
          const ch = await conn.channel()
          attachPublish(ch)
          const q = await ch.queue("")
          await q.bind("amq.fanout")
          const consumer = await q.subscribe({noAck: false}, (msg) => {
            console.log(msg)
            textarea.value += msg.bodyToString() + "\n"
            msg.ack()
          })
        } catch (err) {
          console.error("Error", err, "reconnecting in 1s")
          disablePublish()
          setTimeout(start, 1000)
        }
      }

      function attachPublish(ch) {
        document.forms[0].onsubmit = async (e) => {
          e.preventDefault()
          try {
            await ch.basicPublish("amq.fanout", "", input.value, { contentType: "text/plain" })
          } catch (err) {
            console.error("Error", err, "reconnecting in 1s")
            disablePublish()
            setTimeout(start, 1000)
          }
          input.value = ""
        }
      }

      function disablePublish() {
        document.forms[0].onsubmit = (e) => { alert("Disconnected, waiting to be reconnected") }
      }
      
      function alog(t){
          if(console)console.log(t)
      }
      start()
    </script>
  </head>
  <body>
    <form>
      <textarea id="textarea" rows=10></textarea>
      <br/>
      <input id="message"/>
      <button type="submit">Send</button>
    </form>
  </body>
</html>