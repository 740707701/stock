import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    taskStatus: Array<string>;
    task_status: string;
    pageCount: number;
    pageIndex: number;
    pageSize: number;
    constructor() {
        this.taskStatus = ['进行中', '未完成', '已完成'];
        this.task_status = this.taskStatus[0];
    }

    // 选择状态
    selectStatus(status) {
        this.task_status = status;
        console.log(status)
    }

    // 页码事件
    // setpage(page){

    // }

    ngOnInit() { }
}