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
