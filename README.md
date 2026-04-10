1.  By using the getElementById method we can select a single specific element , as the "id" is always exact.By using the getElementsByClassName method we can select several elements , as the  "class" name can be duplicate.

By using the querySelector method we can select the first element , after selection is made using a specified css selector.The querySelectorAll method is almost the same as previous , instead of returning the first element ,it returns all the matched elements.

2.  At first we will use the .createElement() method , which will create a new element.

Then we will insert text or content using the innerText or innerHTML property.

Then we will append the created element using the .appendChild() method , to it's parent element.

3.  Event bubbling means when a event is triggered , it is first triggered on that element , then the same event is also triggered on that element's parent element , then to it's grandparent , then to their ancestors sequentially,  this way of propagating the event is called the event bubbling.

The event bubbling/event propagation has 3 stages , they are :

capturing phase:the event goes from the root to the target element.

target phase:the event goes to the actual target element.

bubbling phase:the event goes from the root to the target element.

4. event delegation means adding the events to it's parents instead of the target element as the event will eventually goes to the parent by event bubbling.

It's useful as in this way we don't need to add event/event listeners to every child , instead we will add event listener only once to the parent element,eventually saves code and time.

5.  The preventDefault() method prevents the browser's default behaviour (associated with that event) but the event propagation still works.

The stopPropagation() method stops the event propagation but still the browser's default bahaviour(associated with that event) works.