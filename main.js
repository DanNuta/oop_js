class Task {
    constructor(title, desc, id){
        this.title = title;
        this.desc = desc;
        this.id = id
    }
}






class CreateHTMLElement {
    constructor(tag, cssClass){
        this.tag = tag;
        this.cssClass = cssClass;
    }


    render(){
        const tagHTML = document.createElement(this.tag);

        if(this.cssClass){
            tagHTML.className = this.cssClass;
        }

        return tagHTML;
    }
}




class FinishedProject {

    projectFinish = [];


    set addFinish(value){
        const newFinish = [...this.projectFinish, value];

        return newFinish;
    }

    finishProject = (item) =>{
        this.projectFinish = this.addFinish = item;


        console.log(this.projectFinish)

    }
}




class RenderEachTask {
    constructor(task){
        this.task = task;
    }


    btnAccept = () =>{
        this.finish = new FinishedProject();

        this.finish.finishProject(this.task);

    }



    render(){
        const elementDiv = new CreateHTMLElement("div", "element_active");
        const renderElements = elementDiv.render();
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const divBtn = document.createElement("div")
        const btnMore = document.createElement("button")
        const btnAccept = document.createElement("button");

        divBtn.append(btnMore, btnAccept);

        btnAccept.innerHTML = "Accept";
        btnMore.innerHTML = "Learn More";
        p.innerHTML = `${this.task.desc}`
        h1.innerHTML = `${this.task.title}`;
    
        renderElements.append(h1, p, divBtn)

        btnAccept.addEventListener("click", this.btnAccept)

        return renderElements;
    }
}





class TaskElement {
    
    task = [
        new Task("Finish the course", "Finish the course within twe weeks", 1),
        new Task("Buy greceries", "Buy greceries with 2 $", 2),
        new Task("Book hotel", "Book a hoter for a friend", 3)
    ]



    render(){
        const app = document.querySelector(".app");
        const activeProj = new CreateHTMLElement("div", "active_project");
        const divElement = activeProj.render();


        for(let element of this.task){
            const createTask = new RenderEachTask(element);
            const renderTask = createTask.render();
            divElement.appendChild(renderTask)
        }

        app.append(divElement)

    }
}



class App {
    static init(){
        const app = new TaskElement();
        app.render()

    }
}


App.init();


