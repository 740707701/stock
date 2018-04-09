import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    taskStatus: Array<string>;
    task_status: string;
    pageTotalCount: number; // 总数量
    pageIndex: number; // 第几页
    pageSize: number; // 每页数量
    constructor() {
        this.taskStatus = ['进行中', '待完成', '已完成'];
        this.task_status = this.taskStatus[0];
        this.pageTotalCount = 80;
        this.pageIndex = 0;
        this.pageSize = 8;
    }

    // 选择状态
    selectStatus(status) {
        this.task_status = status;
        console.log(status);
    }

    // 页码事件
    // setpage(page){

    // }

    ngOnInit() { }
}