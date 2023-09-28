import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import AboutStudent from './AboutStudent'

const rows = [
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
  {
    id: 1,
    studentName: 'Snow',
    gender: 'Female',
    gradeName: 'Grade 4',
    averageMarks: '20.00%',
    gpa: '4.00',
    classParticipationRate: '99.00%',
    daysAbsent: '1',
    attendanceRate: '0.00%',
  },
]

export default function DetailStudentTable() {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'studentName', headerName: 'Student name', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    {
      field: 'gradeName',
      headerName: 'Grade Name',
      flex: 1,
    },
    {
      field: 'averageMarks',
      headerName: 'Average Marks',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      flex: 1,
      // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'gpa', headerName: 'GPA', flex: 1 },
    { field: 'classParticipationRate', headerName: 'Class Participation Rate', flex: 1 },
    { field: 'daysAbsent', headerName: 'Days Absent', flex: 1 },
    { field: 'attendanceRate', headerName: 'attendanceRate', flex: 1 },
  ]
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
