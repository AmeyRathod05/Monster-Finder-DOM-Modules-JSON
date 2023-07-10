import {monsters} from './monsters.js';

// console.log(monsters);

for(let monsterdiv of monsters){
  showMonster(monsterdiv);
}

{/* <div class="monsters">

        <div class="monster">
          <img src="https://robohash.org/6?set=set2" alt="Amey Rathod" />
          <p class="name">Amey Rathod</p>
          <p class="email">amey@gmail.com</p>
        </div>

        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>Monster Not Found</h1>
        </div>
      </div> */}


function showMonster(monsterdiv){

    const monster = document.createElement('div');
    monster.className = 'monster';

    const monsterImage = document.createElement('img');
    monsterImage.src = `https://robohash.org/${monsterdiv.id}?set=set2`;
    monsterImage.alt = monsterdiv.name;
    
    const monsterName = document.createElement('p');
    monsterName.className = 'name';
    monsterName.innerText = monsterdiv.name;
    
    const monsterEmail = document.createElement('p');
    monsterEmail.className = 'email';
    monsterEmail.innerText = monsterdiv.email;
    
    monster.append(monsterImage,monsterName,monsterEmail);

    document.querySelector('.monsters').append(monster);


    // console.log(monster);
}



function notFound(){
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none';
    
    const span = document.createElement('span');
    span.innerText = '404';
    
    const h1 = document.createElement('h1');
    h1.innerText = 'Monster Not Found';
    
    notFoundDiv.append(span,h1);
    document.querySelector('.monsters').append(notFoundDiv);
    // console.log(notFoundDiv);
}
notFound();

document.querySelector('#search-monster').addEventListener('keyup',function(e){
  const keyword = e.target.value.toLowerCase();
  // console.log(e);
  // console.log(keyword);

  const findMonster = document.querySelectorAll('.monster');

  let notFound = true;


  for(let monster of findMonster){
    // console.log(monster.children);

const mname = monster.children[1].innerText.toLowerCase();
const memail = monster.children[2].innerText.toLowerCase();

// console.log(mname,memail);

if(mname.includes(keyword) || memail.includes(keyword)){
  // console.log('found');
  monster.style.display = 'block';
  notFound = false;
}else {
  monster.style.display = 'none';
}

  }

  if(notFound){
    document.querySelector('.not-found').style.display = 'block';
  }else {
    document.querySelector('.not-found').style.display = 'none';

  }
})
