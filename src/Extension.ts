/// <reference path="../ts/prostyle.d.ts" />

module ProStyle.Extensions.Items.simpleBarChart {

    import Models = ProStyle.Models;
    import Properties = Models.Properties;
    import Scripts = Models.Scripts;

    export class Extension extends Models.Items.Item {

        constructor(itemSet: ProStyle.Models.IItemSet,
                    public bars: number,
                    public width: number,
                    public height: number,
                    public margin: number,
                    public minDomainValue: number,
                    public maxDomainValue: number,
                    init: Properties.PropertyList,
                    scriptSet: Scripts.ScriptSet,
                    public barsInit: Properties.PropertyList,
                    public barsScriptSet: Scripts.ScriptSet) {

            super(itemSet, "simpleBarChart", "SimpleBarChart", [init, barsInit], [scriptSet, barsScriptSet]);

        }
    }
}