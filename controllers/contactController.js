const Contact = require("../models/contactModel");

let createContact = (req, res) => {
  Contact.create({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    phone: req.body.phone
  })  
    .then(dataContact => res.send(dataContact))
    .catch(err => res.send(err));
};

let getAllContact = (req, res) => {
  Contact.find({})
    .then(dataContact => res.send(dataContact))
    .catch(err => res.send(err));
};

let getContactById = (req, res) => {
  Contact.find({_id:req.params.id})
    .then(dataContact => res.send(dataContact))
    .catch(err => res.send(err));
};

let editContact = (req, res )=> {
  Contact.findById({_id:req.params.id})
  .then(dataContact => {
    Contact.updateOne({_id:dataContact._id}, {
      name: req.body.name || dataContact.name,
      email: req.body.email || dataContact.email,
      gender: req.body.gender || dataContact.gender,
      phone: req.body.phone || dataContact.phone,
    })
    .then(contactUpdate=>res.send(`id: ${dataContact._id} has been updated`))
    .catch(err=>res.send(err))
  })
  .catch(err=>res.send(err))
}

let deleteContact = (req,res) => {
  Contact.deleteOne({_id:req.params.id})
  .then(()=>res.send('success delete contact'))
  .catch(err=>res.send(err))
}

module.exports = {
  createContact,
  getAllContact,
  getContactById,
  editContact,
  deleteContact
};
