import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination({ page, count, action }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination color="secondary" count={count} page={page} onChange={(e, value) => action(value)} />
    </div>
  );
}
