
# [Request Header Parser Microservice](https://req-header-info-microservice.herokuapp.com/)

A small microservice api that return a JSON with some request´s Header data.
The user send a url request [appurl]/api/whoami then receive the public ip, language and browser info.
  <br/>
   <br/>
  <p>Output sample:</p>
  <p><a href="https://req-header-info-microservice.herokuapp.com/api/whoami"><code> [appurl]/api/whoami </code></a></p>
    <code><p>{
  "ipaddress": "187.32.80.158",</p>
  <p>"language": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36 Edg/92.0.902.73",</p>
  <p>"software": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"
} </p> </code>  
    <p></p>
    <p></p> 
        <br/>
    <p>Check it out live on <a href="https://req-header-info-microservice.herokuapp.com" target="_blank">heroku</a> alternatively check on <a href="https://replit.com/@Horvatbarbosa/req-header-info-microservicee" target="_blank" >Replit</a> click  Run to start the <a href="https://req-header-info-microservice.horvatbarbosa.repl.co" target="_blank" >app</a> </p>