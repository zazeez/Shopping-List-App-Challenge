function shoppingList() {
$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  $(event.currentTarget).parent().parent().remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){
let checkButton = $(event.currentTarget).parent().parent().find("span")[0];
console.log(checkButton);
$(checkButton).toggleClass("shopping-item__checked");
});

$('#js-shopping-list-form').on('submit', function(event){
   event.preventDefault();
   let userInput = $('#shopping-list-entry').val();
   console.log(userInput);
   let html = `<li>
       <span class="shopping-item">${userInput}</span>
       <div class="shopping-item-controls">
         <button class="shopping-item-toggle">
           <span class="button-label">check</span>
         </button>
         <button class="shopping-item-delete">
           <span class="button-label">delete</span>
         </button>
       </div>
     </li>`;
   $('.shopping-list').append(html);
   $('#shopping-list-entry').val('');
 });
};

function startApp () {
  shoppingList();
};

$(startApp)
