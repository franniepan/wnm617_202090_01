// https://json-generator.com
// https://konbert.com/convert



// USER TEMPLATE

[
  '{{repeat(10)}}',
  {
    id:'{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function() {
      return 'user'+this.id;
    },
    email: function() {
      return this.username+'@gmail.com';
    },
    gender: '{{gender()}}',
    phone: '+1 {{phone()}}',
    about: '{{lorem(1, "paragraphs")}}',
    password: 'md5(pass)',
    img:function(tags) {
      return 'img/user_profile.png';
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]





// ANIMAL TEMPLATE
[
  '{{repeat(50)}}',
  {
    id:'{{index(1)}}',
    user_id: '{{integer(1,10)}}',
    
    name: '{{company()}}',
    
    // most of you will use this
    type: '{{random("Normal","Water","Grass","Fairy")}}',
    // most of you won't need this
    breed: function(tags){
      var breeds = {
        Normal:["Yool","Jellbilly"],
        Water:["Boodoo","Boodoo"],
        Grass:["Blabbit","Blabbit"],
        Fairy:["Hoola","Jeeode"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    
     ability: function(tags){
      var abilities = {
        Normal:["Levitate","Keen Eye"],
        Water:["Water Absorb","Swift Swim"],
        Grass:["Chlorophyll","Overgrow"],
        Fairy:["Magic Guard","Hustle","Serene Grace"]
      };
      var chosen_type = abilities[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    
    
    description: '{{lorem(3,"sentences")}}',
    
    img:function(tags) {
      return 'img/' + this.breed+'.png';
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]






// LOCATIONS TEMPLATE
[
  '{{repeat(250)}}',
  {
    id:'{{index(1)}}',
    animal_id: '{{integer(1,50)}}',
    
    lat:'{{floating(37.794021, 37.698960)}}',
    lng:'{{floating(-122.510762, -122.386346)}}',
    
    description: '{{lorem(3,"sentences")}}',
    
    breed: '{{random("Yool","Jellbilly","Boodoo","Blabbit","Hoola","Jeeode")}}',
      
    /*
    photos: [
      '{{repeat(1,5)}}',
      'https://via.placeholder.com/400/'
     ],
    */
    photo: function(tags) {
      return 'img/' + this.breed+'.png';
    },
    icon: 'https://via.placeholder.com/100/?text=ICON',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]








[
  '{{repeat(10)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]







