import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Marque } from '../marque';
import { MarqueService } from '../services/marque.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-marque',
  templateUrl: './show-marque.component.html',
  styleUrls: ['./show-marque.component.css'],
  inputs: ['marques'],
  outputs: ['add', 'remove'],
})
export class ShowMarqueComponent {
  @Input()
  marques: [Marque];
  @Output()
  add = new EventEmitter<boolean>();
  @Output()
  remove = new EventEmitter<boolean>();

  marque = new Marque();

  constructor(
    private marqueService: MarqueService,
    private modalService: NgbModal
  ) {
    marqueService = marqueService;
    modalService = modalService;
  }

  addMarque() {
    this.marqueService.createMarque(this.marque).subscribe(res => {
      this.add.emit();
    });
  }

  removeMarque(id) {
    this.marqueService.deleteMarqueById(id).subscribe(res => {
      this.remove.emit();
    });
  }

  open(content, id) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(result => {
        if (result) this.removeMarque(id);
      });
  }
}
