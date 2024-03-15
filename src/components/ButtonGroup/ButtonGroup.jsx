import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export function BasicButtonGroup({ variant = 'contained', values = [] }) {
  console.log({ variant });
  return (
    <ButtonGroup variant={variant} aria-label="Basic button group">
      {values.map((value) => {
        return <Button key={value}>{value}</Button>;
      })}
    </ButtonGroup>
  );
}
