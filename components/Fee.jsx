// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"
  
//   const tuitionFee = [
//     // for usa/canada students
//     {
//       id: "1",
//      days: "3 Days",
//       fee: "30$",
//       duration: "30 Minutes",
//     },
//     {
//       id: "2",
//       days: "5 Days",
//       fee: "50$",
//       duration: "30 Minutes",
//     },
//     {
//       id: "3",
//       days: "6 Days",
//       fee: "60$",
//       duration: "30 Minutes",
//     },
//     // for uk students
//     {
//         id: "1",
//         days: "3 Days",
//         fee: "30€",
//         duration: "30 Minutes",
//       },
//       {
//         id: "2",
//         days: "5 Days",
//         fee: "50€",
//         duration: "30 Minutes",
//       },
//       {
//         id: "3",
//         days: "6 Days",
//         fee: "60€",
//         duration: "30 Minutes",
//       },
   
//   ]
  
//   export default function Fee() {
//     return (
//       <Table>
//         <TableCaption>
//         </TableCaption>
//         <TableHeader>
//         <TableRow>
//               <TableCell >
//                 <TableCaption className="text-right font-bold text-3xl text-primary">Tuition Fee</TableCaption>
//               </TableCell>
//             </TableRow>
//           <TableRow>
//             <TableHead className="w-[100px]">Sr No</TableHead>
//             <TableHead>Days/week</TableHead>
//             <TableHead>Duration</TableHead>
//             <TableHead className="text-right">Monthly Fee Amount</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {tuitionFee.map((t_fee,i) => (
//             <TableRow key={i}>
//               <TableCell className="font-medium">{t_fee.id}</TableCell>
//               <TableCell>{t_fee.days}</TableCell>
//               <TableCell>{t_fee.duration}</TableCell>
//               <TableCell className="text-right" >{t_fee.fee}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//           <TableRow>
          
//           </TableRow>
//         </TableFooter>
//       </Table>
//     )
//   }
  


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const tuitionFee = {
    usa: [
      {
        id: "1",
        days: "3 Days",
        fee: "30$",
        duration: "30 Minutes",
      },
      {
        id: "2",
        days: "5 Days",
        fee: "50$",
        duration: "30 Minutes",
      },
      {
        id: "3",
        days: "6 Days",
        fee: "60$",
        duration: "30 Minutes",
      },
    ],
    uk: [
      {
        id: "1",
        days: "3 Days",
        fee: "30€",
        duration: "30 Minutes",
      },
      {
        id: "2",
        days: "5 Days",
        fee: "50€",
        duration: "30 Minutes",
      },
      {
        id: "3",
        days: "6 Days",
        fee: "60€",
        duration: "30 Minutes",
      },
    ]
  }
  
  export default function Fee () {
    return (
      <div className="w-[90%] mx-auto space-y-8">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary my-5">Tuition Fee</h1>
          <p>We will provide 3 free trials lessons.</p>
        </div>
  

        {/* USA/Canada Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-extra-dark border-b pb-2">
            For USA/Canada Monthly Fee
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Sr No</TableHead>
                <TableHead>Days/week</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Monthly Fee Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tuitionFee.usa.map((t_fee, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{t_fee.id}</TableCell>
                  <TableCell>{t_fee.days}</TableCell>
                  <TableCell>{t_fee.duration}</TableCell>
                  <TableCell className="text-right">{t_fee.fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
  
        {/* UK Section */}
        <div className="space-y-4 my-10">
          <h2 className="text-2xl font-semibold text-extra-dark border-b pb-2">
            For UK Monthly Fee
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Sr No</TableHead>
                <TableHead>Days/week</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Monthly Fee Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tuitionFee.uk.map((t_fee, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{t_fee.id}</TableCell>
                  <TableCell>{t_fee.days}</TableCell>
                  <TableCell>{t_fee.duration}</TableCell>
                  <TableCell className="text-right">{t_fee.fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }