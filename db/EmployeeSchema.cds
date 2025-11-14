namespace ust.Sathwik.Koleti.db;
using { cuid,Currency } from '@sap/cds/common';
using { ust.Sathwik.Koleti.reuse as r } from './reuse';


entity employee:cuid{
    nameFirst: String(40);
    nameMiddle: String(40);
    nameLast: String(40);
    nameInitial : String(40);
    Gender: r.Gender;
    Language: String(1);
    phoneNumber : r.phoneNumber;
    Email: r.Email;
    loginName: String(12);
    Currency: Currency;
    salaryAmount: Decimal(10, 2);
    accountNumber:String(16);
    bankId:String(8);
    bankName:String(64)
}