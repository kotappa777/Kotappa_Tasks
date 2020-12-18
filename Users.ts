export class Users
{
     id: number;
        name: string;
        username: string;
        email: string;
        street: string;
          suite: number;
          city: string;
          zipcode: string;
          
            lat: string;
            lng: string;
        phone: string;
        website: string;
        
          cname: string;
          catchPhrase: string;
          bs: string;
        
    

    constructor(id, name, username, email,street, suite, city, zipcode,lat,lng,phone,website,cname,catchPhrase,bs)
    {
        this.id = id;
        this.name = name;
        this.username = username; 
        this.email = email;
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.lat = lat;
        this.lng = lng;
        this.phone = phone;
        this.website = website;
        this.cname = cname;
        this.catchPhrase = catchPhrase;
        this.bs = bs;

    }

}