/**
 * Created by leizhang200857 on 13-9-27.
 */
(function($){
    var ListView =Backbone.View.extend({
        el:$('body'),
        initialize:function(){
            _.bindAll(this,'render'); //修复 上下文中的 this  为本方法  ？？？ 不理解请看 1.1.js
            this.render();
        },
        render:function(){
            console.log(this);
            $(this.el).append('<ul><li>one</li><li>two</li></ul>');
        }

    })
    var listView= new ListView();

    /**
     *
     *
     *
     * **/
})(jQuery)
