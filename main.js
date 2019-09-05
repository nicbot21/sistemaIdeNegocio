$(document).ready(function(){
   /* alert('funciono');*/
   $('ul.collapse li a:first').addClass('active');
   $('.secciones article').hide(); /*ocultar con hide */
  /* $('.secciones article:first').show();*/

  $('ul.collapse li a').click(function(){
    $('ul.collapse li a').removeClass('active'); /**remover clase activa  */
    $(this).addClass('active');/**adicionar clase activa en el que haya elegido */
    $('.secciones article').hide(); /**al hacer cambio las secciones se oculten */

    var activeTab = $(this).attr('href'); /*va a traer el valor del atributo href*/
    /*console.log(activeTab);*/
    $(activeTab).show();
    return false;
});
});