import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MultipleSelectPlaceholder from './ChekBoxApplication';

export default function FormAddApplication(): JSX.Element {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Имя"
      />

      <TextField
        required
        id="outlined-required"
        label="Фамилия"
      />
      <TextField
        required
        id="outlined-required"
        label="Отчество"
      />
      <TextField
        required
        id="outlined-required"
        label="Электронная почта"
      />
      <TextField
        required
        id="outlined-required"
        label="Дата рождения"
      />
      <TextField
        required
        id="outlined-required"
        label="Город"
      />
      <TextField
        required
        id="outlined-required"
        label="Телефон"
      />
      <TextField
        required
        id="outlined-required"
        label="Права(серия/номер)"
      />

      <FormControl
        sx={{ width: 165, marginTop: 1, marginLeft: 1 }}
        fullWidth
      >
        <InputLabel
          required
          id="demo-simple-select-label"
        >
          Лицензия РАФ
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Лицензия РАФ"
        >
          <MenuItem value={10}>Да</MenuItem>
          <MenuItem value={20}>Нет</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{ width: 180, marginTop: 1, marginLeft: 1 }}
        fullWidth
      >
        <InputLabel
          required
          id="demo-simple-select-label"
        >
          Мед.заключение
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Лицензия РАФ"
        >
          <MenuItem value={10}>Да</MenuItem>
          <MenuItem value={20}>Нет</MenuItem>
        </Select>
      </FormControl>

      <div>
        <TextField
          required
          id="outlined-required"
          label="Марка и модель авто"
        />

        <TextField
          id="outlined-required"
          label="Гос.номер"
        />
        <TextField
          required
          id="outlined-required"
          label="Объем двигателя"
        />

        <FormControl
          sx={{ width: 165, marginTop: 1, marginLeft: 1 }}
          fullWidth
        >
          <InputLabel
            required
            id="demo-simple-select-label"
          >
            Тип привода
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Тип привода"
          >
            <MenuItem value={10}>Полный</MenuItem>
            <MenuItem value={20}>Задний</MenuItem>
            <MenuItem value={30}>Передний</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id="outlined-required"
          label="Марка модель покрышек"
        />

        <FormControl
          sx={{ width: 185, marginTop: 1, marginLeft: 1 }}
          fullWidth
        >
          <InputLabel
            required
            id="demo-simple-select-label"
          >
            Наличие наддува
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Тип привода"
          >
            <MenuItem value={10}>Да</MenuItem>
            <MenuItem value={20}>Нет</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: 200, marginTop: 1, marginLeft: 1 }}
          fullWidth
        >
          <InputLabel
            required
            id="demo-simple-select-label"
          >
            Наличие дросселей
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Наличие дросселей"
          >
            <MenuItem value={10}>Да</MenuItem>
            <MenuItem value={20}>Нет</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: 200, marginTop: 1, marginLeft: 1 }}
          fullWidth
        >
          <InputLabel
            required
            id="demo-simple-select-label"
          >
            Изменение фаз газораспределения
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Изменение фаз газораспределения"
          >
            <MenuItem value={10}>Да</MenuItem>
            <MenuItem value={20}>Нет</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: 200, marginTop: 1, marginLeft: 1 }}
          fullWidth
        >
          <InputLabel
            required
            id="demo-simple-select-label"
          >
            Измененный впуск
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Нестандартный впуск"
          >
            <MenuItem value={10}>Да</MenuItem>
            <MenuItem value={20}>Нет</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: 200, marginTop: 1, marginLeft: 1 }}
          fullWidth
        >
          <InputLabel
            required
            id="demo-simple-select-label"
          >
            Изменение кузова
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Изменение кузова"
          >
            <MenuItem value={10}>Да</MenuItem>
            <MenuItem value={20}>Нет</MenuItem>
          </Select>
        </FormControl>
        <MultipleSelectPlaceholder />
        <TextField
          id="outlined-required"
          label="Команда"
        />
        <TextField
          id="outlined-required"
          label="Использование авто другими участниками"
        />
        <TextField
          id="outlined-required"
          label="стартовый номер"
        />
      </div>
      <Button
        type="button"
        variant="contained"
        color="success"
      >
        Отправить заявку
      </Button>
    </Box>
  );
}
