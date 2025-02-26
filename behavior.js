//Converted with C2C3AddonConverter v1.0.1.1
"use strict";
// Porting BY EMI INDO with c3addon-ide-plus

{
    const BEHAVIOR_ID = "aekiro_discreteProgressPart";
    // callMap Deprecated const PLUGIN_VERSION = "1.822";
    const BEHAVIOR_CATEGORY = "other";
    const SDK = globalThis.SDK;
    const lang = self.lang;

    const BEHAVIOR_CLASS = SDK.Behaviors.aekiro_discreteProgressPart = class aekiro_discreteProgressPart extends SDK.IBehaviorBase {
        constructor() {
            super(BEHAVIOR_ID);
            SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(BEHAVIOR_VERSION);
            this._info.SetCategory(BEHAVIOR_CATEGORY);
            this._info.SetAuthor("Aekiro");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsOnlyOneAllowed(true);

            this._info.SetSupportedRuntimes(["c3"]);	// c3 for stubs only!

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
                new SDK.PluginProperty("integer", "index", 0),
                new SDK.PluginProperty("text", "0-frame", ""),
                new SDK.PluginProperty("text", "0.5-frame", ""),
                new SDK.PluginProperty("text", "1-frame", "")
            ]);
            SDK.Lang.PopContext();		// .properties
            SDK.Lang.PopContext();
        }
    };
    BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}
