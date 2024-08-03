import { Table } from "flowbite-react"

function TableMail() {

  const data = [
    { id: 1, email: "khaerilanwar1992@gmail.com", password: "Silenggang1992#" },
    { id: 2, email: "khaerilanwar0001@gmail.com", password: "botemail" },
    { id: 3, email: "khaerilanwar0002@gmail.com", password: "botemail" },
    { id: 4, email: "khaerilanwar0003@gmail.com", password: "botemail" },
    { id: 5, email: "khaerilanwar0004@gmail.com", password: "botemail" }
  ]

  return (
    <div className="overflow-x-auto">
      <Table className="rounded-md md:rounded-lg font-poppins bg-theme3">
        <Table.Head>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-4 md:px-7">No.</Table.HeadCell>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-2">Email</Table.HeadCell>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-2">Password</Table.HeadCell>
          <Table.HeadCell className="bg-theme3 text-gray-200 text-sm normal-case font-semibold px-4 md:px-7">
            <span className="text-sm normal-case font-semibold sr-only">Detail</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-theme-light">
          {data.map((item) => (
            <Table.Row className="bg-theme3" key={item.id}>
              <Table.Cell className="text-gray-200 bg-theme3 px-4 md:px-7">{item.id}.</Table.Cell>
              <Table.Cell className="text-gray-200 bg-theme3 whitespace-nowrap px-2">
                {item.email}
              </Table.Cell>
              <Table.Cell className="text-gray-200 bg-theme3 px-2">{item.password}</Table.Cell>
              <Table.Cell className="text-gray-200 bg-theme3 px-4 md:px-7">
                <a href="#" className="font-medium text-cyan-400 hover:underline ">
                  Detail
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableMail;