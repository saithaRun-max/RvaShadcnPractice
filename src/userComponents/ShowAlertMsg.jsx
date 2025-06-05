import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// const ShowAlertMsg = (props) => {
//   const { alert } = props;
//   console.log(alert);
//   return (
//     <div>
//       <Alert>
//         <AlertTitle>{alert}</AlertTitle>
//       </Alert>
//     </div>
//   );
// };

const ShowAlertMsg = () => {
  return (
    <div>
      <Alert>
    
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </Alert>
    </div>
  );
};

export default ShowAlertMsg;
