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
      <div className="w-full max-w-[98vw] xs:w-[95%] sm:w-[90%] mx-auto space-y-8 px-2 xs:px-2 sm:px-0">
        {/* Main Heading */}
        <div className="text-center">
          <h1 className="my-6 xs:my-8 sm:my-10 text-xl xs:text-2xl sm:text-3xl font-semibold text-extra-dark text-center">Tuition Fee</h1>
          <p>We will provide 3 free trials lessons.</p>
        </div>
  

        {/* USA/Canada Section */}
        <div className="space-y-4 overflow-x-auto">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-extra-dark border-b pb-2">
            For USA/Canada Monthly Fee
          </h2>
          <div className="min-w-[320px] xs:min-w-[350px] sm:min-w-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] xs:w-[60px] sm:w-[100px]">Sr No</TableHead>
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
        </div>
  
        {/* UK Section */}
        <div className="space-y-4 my-6 xs:my-8 sm:my-10 overflow-x-auto">
          <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-extra-dark border-b pb-2">
            For UK Monthly Fee
          </h2>
          <div className="min-w-[320px] xs:min-w-[350px] sm:min-w-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] xs:w-[60px] sm:w-[100px]">Sr No</TableHead>
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
      </div>
    )
  }