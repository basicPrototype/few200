import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  songForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(20)]],
      artist: ['', [Validators.required]],
      album: ['', [Validators.required]]
    });
  }

  get title() {
    return this.songForm.get('title');
  }

  get artist() {
    return this.songForm.get('artist');
  }

  get album() {
    return this.songForm.get('album');
  }

  submit() {
    console.log(this.songForm.value); // Dispatch!
  }

}
