const addBtn = document.getElementById('addNote');
const UpdateArea = () => {
    const textarea = document.querySelectorAll('textarea');
    const notes =[];
    console.log(textarea);
    textarea.forEach((note) => {
        return notes.push(note.value);
    });
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
}

const addNotes = (text =' ') => {
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="notes-content">
                <button class="edit"><i class='bx bx-edit'></i></button>
                <button class="delete"><i class='bx bxs-message-square-x'></i></button>
            </div>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" style="width : 380px; height : 110px; padding: 10px; font-size : 18px; overflow:hidden; border : none; outline: none; margin : 10px;"></textarea>
    `;

   note.innerHTML= htmlData;
   const editBtn = note.querySelector('.edit');
   const delBtn = note.querySelector('.delete');
   const textarea = note.querySelector('textarea');
   const main = note.querySelector('.main');

   delBtn.addEventListener('click' ,() => {
    note.remove();
   });
   textarea.value = text;
   main.innerHTML = text;


   editBtn.addEventListener('click' ,()=>{
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
   });

   textarea.addEventListener('change', (event) => {
    console.log(event);
    const val = event.target.value;
    console.log(val);
    // textarea.value = val;
    main.innerHTML = val;
    UpdateArea();
   });
   document.body.appendChild(note);
};
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){  notes.forEach((note)=>addNotes(note))};

addBtn.addEventListener("click",() => addNotes());