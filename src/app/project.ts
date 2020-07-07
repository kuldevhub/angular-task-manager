import { ClientLocation } from './client-location';

export class Project {
    projectID: number;
    projectName: string;
    dateOfStart: Date;
    teamSize: number;
    active: boolean;
	status: string;
    clientLocationId: number;
    clientLocation: ClientLocation;

    constructor(){
        this.projectID = 0;
        this.projectID = null;
        this.dateOfStart = null;
        this.teamSize = 0;
        this.active = true;
        this.status = null;
        this.clientLocationId = null;
        this.clientLocation = new ClientLocation;
    }


}

