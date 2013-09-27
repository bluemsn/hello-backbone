/**
 * Created by leizhang200857 on 13-9-27.
 */
(function($){
    var ListView =Backbone.View.extend({
        el:$('body'),
        initialize:function(){
            _.bindAll(this,'render','evnentInit','liEvent'); //  主要 理解_bindAll({},'');
            this.render();
            this.evnentInit();
        },
        evnentInit:function(){
            $(this.el).on('click','li',this.liEvent);



            var buttonView = {
                label  : 'underscore',
                onClick: function(){
                    alert('clicked: ' + this.label);
                },
                onHover: function(){ console.log('hovering: ' + this.label); }
            };


            //_.bindAll(buttonView, 'onClick', 'onHover');
            // When the button is clicked, this.label will have the correct value.


            $('#underscore_button').on('click', buttonView.onClick );
        },
        liEvent:function(){
            console.log(this);
        },
        render:function(){
            //console.log(this);
            $(this.el).append('<ul><li>one</li><li>two</li></ul>');

        }

    })
    var listView= new ListView();
})(jQuery)
