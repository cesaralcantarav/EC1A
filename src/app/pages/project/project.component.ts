import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService} from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [];
  apartments = [];
  showProject = "true";

  constructor(private readonly projectService: ProjectService, 
              private readonly apartmentService: ApartmentService,
              private activeRoute: ActivatedRoute) { }

  getProjects(){
    this.projectService.getProject().subscribe((rest: any) => {
      console.log(rest);
      this.projects = rest.data
    })
  }
  
  getProjectById(id: number){
    this.projectService.getProject().subscribe((rest: any) => {
      this.projects = rest.data.filter((item: { id: number }) => item.id == id);
    })
  }

  getApartmentByProject(id: number){
    this.apartmentService.getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: {projectId: number}) => item.projectId == id);
      console.log(this.apartments);
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if(params.id){
        this.getProjectById(params.id);
        this.getApartmentByProject(params.id);
        this.showProject = "false";
      }
      else{
        this.getProjects();
      }
    })
  }

}
