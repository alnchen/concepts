## Event Bubbling
  * when multiple event handlers exist within a container, you want to specify which event is triggered first

  ** (side note: use underscores for id naming due to javascript handling)

  ```
  <ul id='container'>
    <li id='list_item'>List Item</li>
  </ul>

  var container = document.getElementById('container');
  var listItem = document.getElementById('list_item');

  container.addEventListener('click', function() {
    alert('this is the UL')
    }, true);

  listItem.addEventListener('click', function() {
    alert('this is the LI')
    }, true)

  ```

  * the above event handler sets capturing to true so events are captured going downwards. to allow for event bubbling, set to false


## Difference between a cookie, sessionStorage and localStorage
  * cookie: data that is stored server side. it can expire
  * sessionStorage: data stored on client side that expires when browser is closed
  * localStorage: data stored on client side that persists until user clears cache

## Difference between <script>, <script async> and <script defer>
  * script: html will be parsed until it hits script, then pauses parsing to download/execute script before continuing
  * async: html will continue while script is downloaded, then pauses parsing to execute file when download finished
  * defer: downloads files while html is being parsed, will only execute script after html parsing is completed
