import { Component, OnInit } from '@angular/core';
import { Rule } from '../../../../shared/model/rule.model';
import { RulesService } from '../../../../shared/services/rules.service';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html'
})
export class RulesListComponent implements OnInit {
  rules: Array<Rule> = [];

  constructor(
    private rulesService: RulesService
  ) { }

  ngOnInit() {
    this.rulesService.list().
    subscribe( (rules) => this.rules = rules);
  }

}
