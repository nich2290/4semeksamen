export default class Fixednav {
    constructor(element) {
      this.el = element
      this.extractcontent = this.extractcontent.bind(this)
      this.init()
      
    }
    
    init() {
      
      this.extractcontent();      
      
    // Init ScrollMagic
  var controller = new ScrollMagic.Controller()
 
  // build a scene
  var slidein = new ScrollMagic.Scene({
    triggerElement: '.contact-static',
    offset: '1050',
    reverse: true
  })
    .setClassToggle('.contact-fixed', 'fade-in') // add class to project01
    
 
  .addTo(controller)
  
  // build a scene
  var slideout = new ScrollMagic.Scene({
    triggerElement: 'footer',
    offset: '-450',
    reverse: true
  })
    .setClassToggle('.contact-fixed', 'fade-out') // add class to project01
    
 
  .addTo(controller)
 
}
 
extractcontent() {
  const fixedContact = `
  <section class="container fixednav">
  <div class="row">
      <div class="col-md-4 col-xs-2 col-sm-2">
        <div class="fixed-contact-column1">
          ${insertTitle}
        </div>
      </div>
      <div class="col-md-2 col-md-offset-1 col-xs-2 col-sm-3 col-sm-offset-2">
        <div class="fixed-contact-column2">
          ${insertLinkTop}
        </div>
      </div>
      <div class="col-md-3 col-md-offset-2 col-xs-2 col-sm-4 col-sm-offset-1">
        <div class="fixed-contact-column3">
          ${insertLinkBottom}
          
        </div>
      
  </div>
  </section>
  `
  document.body.insertAdjacentHTML('beforeend', fixedContact);