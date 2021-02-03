//
const asif = new Map();
asif.set('fullName', 'Asif Ur Rahman');
asif.set('school', 'shankharigati');
asif.set('zilla', 'jessore');
console.log(asif);
console.log( asif.get('fullName'));
console.log(asif.has('fullName'));
console.log(asif.has('lastName'));
console.log( asif.get('school'));
console.log(asif.has('zilla'));
asif.delete('zilla');   //delete any item in map
console.log(asif.has('zilla'));
console.log(asif);
asif.clear(); // clear the asif full map
console.log(asif);

//second exercise
const favorite = new Map();
favorite.set('name', 'Zonayed Ahmed');
favorite.set('job', 'student');
favorite.set('color', 'blue');
favorite.set('os', 'ubuntu');
favorite.set('mobileos', 'android');
console.log(favorite);
console.log(favorite.size);