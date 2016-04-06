import $ from "js_libs/hobo/dist/hobo.build";
import router from "./router";
import nav from "./menus/nav";
import * as core from "./core";
import intro from "./menus/intro";
import ScrollAnimate from "./core/ScrollAnimate";


/**
 *
 * @public
 * @class App
 * @classdesc Load the App application Class to handle it ALL.
 *
 */
class App {
    constructor () {
        this.nav = nav;
        this.core = core;
        this.intro = intro;
        this.router = router;

        this.initEvents();
        this.initModules();
    }


    /**
     *
     * @public
     * @instance
     * @method initModules
     * @memberof App
     * @description Initialize application modules.
     *
     */
    initModules () {
        this.core.detect.init( this );
        this.core.resizes.init( this );
        this.core.scrolls.init( this );
        this.router.init( this );
        this.nav.init( this );

        this.analytics = new this.core.Analytics();
        this.scrollAnimations = new ScrollAnimate($(".js-scroll-animate"));
    }


    /**
     *
     * @public
     * @instance
     * @method initEvents
     * @memberof App
     * @description Initialize application events.
     *
     */
    initEvents () {
        this._onPreloadDone = this.onPreloadDone.bind( this );

        this.core.emitter.on( "app--preload-done", this._onPreloadDone );
    }


    /**
     *
     * @public
     * @instance
     * @method onPreloadDone
     * @memberof App
     * @description Handle the event for initializing the app.
     *
     */
    onPreloadDone () {
        this.core.emitter.off( "app--preload-done", this._onPreloadDone );

        this.core.dom.html.removeClass( "is-clipped" );
        this.core.dom.body.removeClass( "is-clipped" );

        setTimeout( () => {
            this.intro.teardown();
        }, 1000);
    }
}


/******************************************************************************
 * Expose
*******************************************************************************/
window.app = new App();


/******************************************************************************
 * Export
*******************************************************************************/
export default window.app;