import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PdfServiceService {
  a = [
    {
      _id: '62424446ab6a3043342bc021',
      originalname: '1647450008484-liklihood probability function vs. pdf.pdf',
      mimetype: 'application/pdf',
      imageurl: '/static/siteImages/pdf.png',
      title: 'Likelihood and Probability',
      filename:
        '1648510022303-1647450008484-liklihood probability function vs. pdf.pdf',
      description:
        'Probability is a function of possible values of the data given the model parameters. Likelihood is a function of possible values of the model parameters given the data. Probability is used to find the chance of occurrence of a particular situation. Likelihood is used to generally maximize the chances of a particular situation to occur.',
      size: '1596',
      createdAt: '2022-03-28T23:27:02.420Z',
      __v: 0,
    },
    {
      _id: '6242449dab6a3043342bc022',
      originalname: 'Module 23 L2 -- socp_cone.pdf',
      mimetype: 'application/pdf',
      imageurl: '/static/siteImages/pdf.png',
      title: 'Conic Convex Optimization',
      filename: '1648510109121-Module 23 L2 -- socp_cone.pdf',
      description:
        'A conic optimization problem is a problem involving a constraint that the optimization variable be in some closed convex cone. The field of conic optimization is a broad one, as any convex optimization problem can be cast as a conic problem, see Nesterov and Nemirovski (1992).',
      size: '2209',
      createdAt: '2022-03-28T23:28:29.225Z',
      __v: 0,
    },
  ];

  // dif from video!
  getNumberOfPDFS(): number{
    return this.a.length;
  }

  listPDFS(){
    return this.a;
  }

  getPDF(id: any){
    return this.a.find((el) => {return el._id == id});
  }

  constructor() {
  }
}
