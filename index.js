const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    /* in order to communicate between the two we used host name of the redis service , when redis will try to find this hostname outside ,
     then docker will look in to its service in the dockerFile with name as "redis-server" */
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
