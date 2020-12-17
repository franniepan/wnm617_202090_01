
const makeAnimalList = templater(o=>`
   <div class="animallist-item js-animal-jump" data-id="${o.id}">
      <div class="animallist-icon">
         <img src="${o.img}" alt="">
      </div>
      <div class="animallist-description">
         <div class="animallist-name">${o.name}</div>
         <div class="animallist-breed"><strong>Breed:</strong> ${o.breed}</div>
         <div class="animallist-ability"><strong>Ability:</strong> ${o.ability}</div>
      </div>
   </div>
   `);

const makeUserProfile = templater(o=>`
   <div class="user-profile-image">
      <img src="${o.img}" alt="">
      <a href="#user-upload-page" class="floater bottom"><img class="icon" src="img/icon/changephoto.png" alt=""></a></a>
         <div class="user-profile-information" style="padding:1em">
            <div>${o.name}</div>
            <div>${o.email}</div>
         </div>
   </div>

   `);

const makeAnimalProfile = templater(o=>`
   <div class="animal-profile-image">
      <img src="${o.img}" alt="">
   </div>
<div class="animal-profile">
   <h2>${o.name}</h2>
   <div class="animallist-type"><strong>Type:</strong> ${o.type}</div>
   <div class="animallist-breed"><strong>Breed:</strong> ${o.breed}</div>
   <div class="animallist-breed"><strong>Ability:</strong> ${o.ability}</div>
   <div><p>${o.description}</p></div>
   <div><a href="#" class="js-animal-delete" data-id="${o.id}">Delete</a></div></div>
</div>`);


const makeAnimalPopup = o => `
<div class="flex animal-popup" style="flex-wrap:wrap">
   <div class="display-flex">
      <div class="animal-image">
         <img src="${o.img}" alt="">
      </div>

      <div class="flex animal-popup-description">
         <div>Hi, I'm <strong>${o.name}</strong>. ${o.ability} is my best trick.</div>

      </div>
   </div>


   <div class="form-button js-animal-jump" data-id="${o.animal_id}" style="width:100%">Visit</div>
</div>
`;




const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}

const makeUserEditForm = o => `

${FormControl({
   namespace:'user-edit',
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type your user name',
   value:o.username
})}
${FormControl({
   namespace:'user-edit',
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type your full name',
   value:o.name
})}
${FormControl({
   namespace:'user-edit',
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type your email',
   value:o.email
})}
${FormControl({
   namespace:'user-edit',
   name:'about',
   displayname:'About',
   type:'text',
   placeholder:'Type something interesting',
   value:o.about
})}
`;



const makeAnimalEditForm = o => `
<div class="animal-profile-edit-image">
   <img src="${o.img}">
</div>
${FormControl({
   namespace:'animal-edit',
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type the monster name',
   value:o.name
})}
${FormControl({
   namespace:'animal-edit',
   name:'type',
   displayname:'Type',
   type:'text',
   placeholder:'Type the type',
   value:o.type
})}
${FormControl({
   namespace:'animal-edit',
   name:'breed',
   displayname:'Breed',
   type:'text',
   placeholder:'Type the breed',
   value:o.breed
})}
${FormControl({
   namespace:'animal-edit',
   name:'ability',
   displayname:'Ability',
   type:'text',
   placeholder:'Type the ability',
   value:o.ability
})}
<div class="form-control">
   <label for="animal-edit-description" class="form-label">Description</label>
   <textarea id="animal-edit-description" class="form-input" data-role="none" placeholder="Type a description" style="height:10em">${o.description}</textarea>
</div>
`;






const drawAnimalList = (a,empty_phrase="No animals yet, you should add some.") => {
   $("#list-page .animallist").html(
      a.length ? makeAnimalList(a) : empty_phrase
   )
}





const capitalize = s => {
   s+="";
   return s=='' ? '' : s[0].toUpperCase()+s.substr(1);
}

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>`<div class="filter" data-field="${type}" data-value="${o}">${capitalize(o)}</div>`)(a);
}

const makeFilterList = (animals) => {
   return `
   <div class="filter" data-field="type" data-value="">All</div>
   |
   ${filterList(animals,'type')}
   |
   ${filterList(animals,'breed')}
   `
}





const makeUploaderImage = (el, name, folder='') => {

   $(el).parent().css({'background-image':`url(${folder+name}`}).addClass('picked')
      .prev().val(folder+name);
}




