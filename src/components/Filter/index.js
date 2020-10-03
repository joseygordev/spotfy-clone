import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import {SPOTFY_API_FILTER} from '../../constants/config';

import useStyles from './styles';

export default function Filter() {
  const classes = useStyles();

  const [filters, setFilters] = useState([]);
  const [form, setForm] = useState({});
  const [requestingError, setRequestingError] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    fetch(SPOTFY_API_FILTER)
    .then(response => response.json())
    .then(data => {
      const formValues = {};
      
      data.filters.forEach((filter) => {
        formValues[filter.id] = {
          value: filter.id === 'timestamp' ? undefined : '',
          error: false
        };
      });

      setForm(formValues);
      setFilters(data.filters)
    }, () => {
      setRequestingError(true);
    });
  }, []);

  useEffect(() => {
    setFormError(Object.keys(form).some((field) => form[field].error));
    setFormChanged(Object.keys(form).some((field) => form[field].value !== ''));
  }, [form]);

  const onChangeInput = (value, input) => {
    const {validation} = input;

    const setValueInput = () => setForm({
      ...form,
      [input.id]: {
        value: value,
        error: false
      }
    });

    if (validation.min || validation.max) {
      if (value.length && (value < validation.min || value > validation.max)) {
        setForm({
          ...form,
          [input.id]: {
            value: '',
            error: true
          }
        })
      } else {
        setValueInput();
      }
    } else {
      setValueInput()
    }
  }

  const renderInput = (item) => {
    const type = item?.validation?.primitiveType;
    return (
      <div className={classes.containerField} key={item.id}>
        {type === 'INTEGER' ? (
          <>
            <TextField
              id="standard-number"
              label={item.name}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={form[item.id].error}
              onChange={({target}) => onChangeInput(target.value, item)}
              helperText={form[item.id].error && "Valor incorreto!"}
              value={form[item.id].value}
            /> 
          </>
        ) : (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Data"
              value={form[item.id].value}
              onChange={(date) => onChangeInput(date, item)}
              KeyboardButtonProps={{
                'aria-label': 'Data',
              }}
            />
          </MuiPickersUtilsProvider>
        )}
      </div>
    )
  }

  const onSelect = (name, value) => {
    setForm({
      ...form,
      [name]: {
        ...form[name],
        value
      }
    })
  }

  const renderSelect = (filter) => {
    return (
      <div className={classes.containerSelect} key={filter.id}>
        <TextField
          id="standard-select-currency"
          select
          label={filter.name}
          value={form[filter.id].value}
          className={classes.select}
        >
          {filter.values.map((option) => (
            <MenuItem onClick={() => onSelect(filter.id, option.value)} key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
    )
  }

  const renderError = () => {
    return (
      <div className={classes.containerError}>
        <Typography className={classes.errorMessage} variant="subtitle1" component="h2">
          Algo deu errado, tente recarregar a página!
        </Typography>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1" component="h2">Filtrar por:</Typography>
      {requestingError ? renderError() : (
        <>
          {filters.map((filter) => filter.values ? renderSelect(filter) : renderInput(filter))}
          <Button disabled={formError || !formChanged} className={classes.button} variant="contained" color="primary">
            Filtrar
          </Button>
        </>
      )}
    </div>
  );
}