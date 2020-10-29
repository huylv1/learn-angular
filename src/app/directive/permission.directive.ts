import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective {
  @Input() appPermission: string[];

  private currentRole = 'agent';

  constructor(
    private tmplRef: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }
}
