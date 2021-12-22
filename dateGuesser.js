const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

/* The date input needs to be in a specific format for us to work properly with it, so I specified it in the query */
rl.question('Insert date (dd/mm/yyyy) (years 0000-9999): ', str => {
  let doomsday = 0
  let date = 0

  /* Separating the sections of the string we're going to use */
  let millennium = parseInt(str.charAt(6))
  let century = parseInt(str.charAt(7))
  let year = parseInt(str.substr(8, 9))
  let month = parseInt(str.substr(3, 4))
  let day = parseInt(str.substr(0, 2))

  /* Determining which day of the week is doomsday on the first year of each century */

  if (millennium % 2 === 0) {
    if (century === 0 || century === 4 || century === 8) {
      doomsday = 2
    }

    if (century === 1 || century === 5 || century === 9) {
      doomsday = 0
    }

    if (century === 2 || century === 6) {
      doomsday = 5
    }

    if (century === 3 || century === 7) {
      doomsday = 3
    }
  } else {
    if (century === 0 || century === 4 || century === 8) {
      doomsday = 5
    }

    if (century === 1 || century === 5 || century === 9) {
      doomsday = 3
    }

    if (century === 2 || century === 6) {
      doomsday = 2
    }

    if (century === 3 || century === 7) {
      doomsday = 0
    }
  }

  /* Determining which day of the week is doomsday on the given year, if it doesn't end with 00 */

  if (year !== 00) {
    let q = Math.floor(year / 12)
    let r = year % 12
    doomsday = (doomsday + q + r + Math.floor(r / 4)) % 7
  }

  /* At last, determining which day of the week is the given day */

  /* January and February doomsdays change if it's a leap year */
  if (month === 1) {
    if (year % 4 === 0) {
      if (day < 4) {
        date = (doomsday + 7 - (4 - day)) % 7
      } else {
        date = (doomsday + day - 4) % 7
      }
    } else {
      if (day < 3) {
        date = (doomsday + 7 - (3 - day)) % 7
      } else {
        date = (doomsday + day - 3) % 7
      }
    }
  }

  if (month === 2) {
    if (year % 4 === 0) {
      date = (doomsday + 7 - ((29 - day) % 7)) % 7
    } else {
      date = (doomsday + 7 - ((28 - day) % 7)) % 7
    }
  }

  if (month === 3) {
    if (day < 7) {
      date = (doomsday + 7 - (7 - day)) % 7
    } else {
      date = (doomsday + day - 7) % 7
    }
  }

  if (month === 4) {
    if (day < 4) {
      date = (doomsday + 7 - (4 - day)) % 7
    } else {
      date = (doomsday + day - 4) % 7
    }
  }

  if (month === 5) {
    if (day < 9) {
      date = (doomsday + 7 - ((9 - day) % 7)) % 7
    } else {
      date = (doomsday + day - 9) % 7
    }
  }

  if (month === 6) {
    if (day < 6) {
      date = (doomsday + 7 - (6 - day)) % 7
    } else {
      date = (doomsday + day - 6) % 7
    }
  }

  if (month === 7) {
    if (day < 11) {
      date = (doomsday + 7 - ((11 - day) % 7)) % 7
    } else {
      date = (doomsday + day - 11) % 7
    }
  }

  if (month === 8) {
    if (day < 8) {
      date = (doomsday + 7 - (8 - day)) % 7
    } else {
      date = (doomsday + day - 8) % 7
    }
  }

  if (month === 9) {
    if (day < 5) {
      date = (doomsday + 7 - (5 - day)) % 7
    } else {
      date = (doomsday + day - 5) % 7
    }
  }

  if (month === 10) {
    if (day < 10) {
      date = (doomsday + 7 - ((10 - day) % 7)) % 7
    } else {
      date = (doomsday + day - 10) % 7
    }
  }

  if (month === 11) {
    if (day < 7) {
      date = (doomsday + 7 - (7 - day)) % 7
    } else {
      date = (doomsday + day - 7) % 7
    }
  }

  if (month === 12) {
    if (day < 12) {
      date = (doomsday + 7 - ((12 - day) % 7)) % 7
    } else {
      date = (doomsday + day - 12) % 7
    }
  }

  /* Changing the number into the string with the day of the week */

  if (date === 0) {
    date = 'Sunday'
  }

  if (date === 1) {
    date = 'Monday'
  }

  if (date === 2) {
    date = 'Tuesday'
  }

  if (date === 3) {
    date = 'Wednesday'
  }

  if (date === 4) {
    date = 'Thursday'
  }

  if (date === 5) {
    date = 'Friday'
  }

  if (date === 6) {
    date = 'Saturday'
  }

  console.log(date)

  rl.close()
})
