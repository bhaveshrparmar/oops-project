 const submitData = document.querySelector('#submitData');

        submitData.addEventListener('submit', (e) => {
            e.preventDefault();

            
            const studentName = document.querySelector('#studentName').value;
            const studentGrid = document.querySelector('#studentGrid').value;
            const studentMobile = document.querySelector('#studentMobile').value;
            const parentName = document.querySelector('#parentName').value;
            const parentRelation = document.querySelector('#parentRelation').value;
            const parentMobile = document.querySelector('#parentMobile').value;

            
            class Common {
                constructor(who, name, mobile) {
                    this.who = who;
                    this.name = name;
                    this.mobile = mobile;
                }
                getDetails() {
                    return `<strong>${this.who}</strong> - Name: ${this.name}, Mobile: ${this.mobile}`;
                }
            }

            class Student extends Common {
                constructor(who, name, mobile, grid) {
                    super(who, name, mobile);
                    this.grid = grid;
                }
                getDetails() {
                    return `${super.getDetails()}, Grid: ${this.grid}`;
                }
            }

            class Parent extends Common {
                constructor(who, name, mobile, relation) {
                    super(who, name, mobile);
                    this.relation = relation;
                }
                getDetails() {
                    return `${super.getDetails()}, Relation: ${this.relation}`;
                }
            }

            
            const std1 = new Student("Student", studentName, studentMobile, studentGrid);
            const p1 = new Parent("Parent", parentName, parentMobile, parentRelation);

            
            const output = document.querySelector('#outputArea');
            output.innerHTML = `
                ${std1.getDetails()}
                ${p1.getDetails()}
            `;
        });