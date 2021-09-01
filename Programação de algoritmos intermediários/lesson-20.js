var Person = function(firstAndLast) {
  // Altere apenas o código abaixo desta linha
  // Complete o método abaixo e implemente os outros da mesma forma

  let fullName = firstAndLast;
  let firstName = undefined;
  let lastName = undefined;

  this.getFirstName = function() {
    return firstName || fullName.split(' ')[0];
  };
  this.getLastName = function() {
    return lastName || fullName.split(' ')[1];
  };
  this.getFullName = function() {
    return fullName;
  };
  this.setFirstName = function(first) {
    firstName = first;
    this.setFullName(this.getFirstName() + ' ' + this.getLastName());
  };
  this.setLastName = function(last) {
    lastName = last;
    this.setFullName(this.getFirstName() + ' ' + this.getLastName());
  };
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();