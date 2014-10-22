var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var richText = new ccui.RichText();
        richText.ignoreContentAdaptWithSize(false);
        richText.width = 120;
        richText.height = 100;

        var re1 = new ccui.RichElementText(1, cc.color.WHITE, 255, "This color is white", "Helvetica", 10);
        var re2 = new ccui.RichElementText(2, cc.color.YELLOW, 255, "And this is yellow. ", "Helvetica", 10);
        var re3 = new ccui.RichElementText(3, cc.color.BLUE, 255, "This one is blue. ", "Helvetica", 10);
        var re4 = new ccui.RichElementText(4, cc.color.GREEN, 255, "And this is Green. ", "Helvetica", 25);
        var re5 = new ccui.RichElementText(5, cc.color.RED, 255, "This is well red . ", "Helvetica", 10);
        var re6 = new ccui.RichElementText(6, cc.color.ORANGE, 255, "WELL DONE AT THE END. ", "Helvetica", 10);

        richText.pushBackElement(re1);
        richText.pushBackElement(re2);
        richText.pushBackElement(re3);
        richText.pushBackElement(re4);
        richText.pushBackElement(re5);
        richText.pushBackElement(re6);

        richText.x = size.width / 2;
        richText.y = size.height / 2;

        this.addChild(richText);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

