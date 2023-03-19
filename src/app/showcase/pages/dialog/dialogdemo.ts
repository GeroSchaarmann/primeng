import { Component } from '@angular/core';
import { BasicDoc } from '../../doc/dialog/basicdoc';
import { EventsDoc } from '../../doc/dialog/eventsdoc';
import { ImportDoc } from '../../doc/dialog/importdoc';
import { LongContentDoc } from '../../doc/dialog/longcontentdoc';
import { PropsDoc } from '../../doc/dialog/propsdoc';
import { StyleDoc } from '../../doc/dialog/styledoc';
import { ResponsiveDoc } from '../../doc/dialog/responsivedoc';
import { PositionDoc } from '../../doc/dialog/positiondoc';
import { MaximizableDoc } from '../../doc/dialog/maximizabledoc';
import { TemplateDoc } from '../../doc/dialog/templatedoc';
import { OverlaysInsideDoc } from '../../doc/dialog/overlaysinsidedoc';
import { ModalDoc } from '../../doc/dialog/modaldoc';

@Component({
    templateUrl: './dialogdemo.html'
})
export class DialogDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'longcontent',
            label: 'Long Content',
            component: LongContentDoc
        },
        {
            id: 'modal',
            label: 'Modal',
            component: ModalDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'maximizable',
            label: 'Maximizable',
            component: MaximizableDoc
        },
        {
            id: 'custom',
            label: 'Custom Content',
            component: TemplateDoc
        },
        {
            id: 'overlaysinside',
            label: 'Overlays Inside',
            component: OverlaysInsideDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        }
    ];

    apiDocs = [
        {
            id: 'props',
            label: 'Properties',
            component: PropsDoc
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        }
    ];

    // displayModal: boolean;

    // displayBasic: boolean;

    // displayBasic2: boolean;

    // displayMaximizable: boolean;

    // displayResponsive: boolean;

    // displayPosition: boolean;

    // position: string;

    // showModalDialog() {
    //     this.displayModal = true;
    // }

    // showBasicDialog() {
    //     this.displayBasic = true;
    // }

    // showBasicDialog2() {
    //     this.displayBasic2 = true;
    // }

    // showMaximizableDialog() {
    //     this.displayMaximizable = true;
    // }

    // showPositionDialog(position: string) {
    //     this.position = position;
    //     this.displayPosition = true;
    // }

    // showResponsiveDialog() {
    //     this.displayResponsive = true;
    // }
}
