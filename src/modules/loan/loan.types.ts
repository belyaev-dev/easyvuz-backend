interface AmountForm {
  payment: number;
  period: number;
  periodUnit: number;
  amount: number;
  initialPayment: number;
  propertyPrice: number;
  propertySelected: number;
  propertyType: number;
}

interface ContactsForm {
  name: string;
  surname: string;
  patronymic: string;
  transactionCity: string;
  creditCity: string;
  email: string;
  incomeSum: string;
  companyOffice: string;
  visitDate: string;
}

interface PassportForm {
  gender: number;
  departmentCode: string;
  serial: string;
  number: string;
  date: string;
  issuingAuthority: string;
  birthplace: string;
  birthday: string;
  registration: string;
  addressRegistrationDate: string;
  residence: string;
  addressLivingDate: string;
}

interface JobForm {
  jobType: string;
  enterpriseActivityType: string;
  jobDateStart: string;
  inn: string;
  workAddress: string;
  employerName: string;
  jobPhone: string;
  numberOfStaff: string;
  seniorityValue: string;
  employerTypeCode: string;
  position: string;
  OKVEDCode: string;
}

interface AdditionalForm {
  education: string;
  maritalCode: string;
  childrenCount: string;
  secondaryCustomerPhoneNumber: string;
  relationDegree: string;
  expensesSum: string;
  estateKindCode2: string;
  estateKindCode1: string;
  snils: string;
  secondaryCustomerName: string;
  secondaryCustomerSurname: string;
  secondaryCustomerPatronymic: string;
}
