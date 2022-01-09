const nations = [
  {name: 'England', filterTerm: 'england', id: 1},
  {name: 'Scotland', filterTerm: 'scotland', id: 2},
  {name: 'Wales', filterTerm:'wales', id: 3},
  {name: 'Northern Ireland', filterTerm:'northern ireland', id: 4}
]

const utlas = []

const ltlas = []

const dataPoints = [
  {name: 'Daily Cases', filterTerm: 'newCasesByPublishDate', category: 'cases', id: 1},
  {name: 'Cumulative Cases', filterTerm: 'cumCasesByPublishDate', category: 'cases', id: 2},
  {name: 'Daily Deaths', filterTerm: 'newDeaths28DaysByPublishDate', category: 'deaths', id: 3},
  {name: 'Cumulative Deaths', filterTerm: 'cumDeaths28DaysByPublishDate', category: 'deaths', id: 4},
  {name: 'First Dose Vaccinations', filterTerm: 'newPeopleVaccinatedFirstDoseByPublishDate', category: 'vaccine', id: 5},
  {name: 'Second Dose Vaccinations', filterTerm: 'newPeopleVaccinatedSecondDoseByPublishDate', category: 'vaccine', id: 6},
  {name: 'Booster Vaccinations', filterTerm: 'newPeopleVaccinatedThirdInjectionByPublishDate', category: 'vaccine', id: 7},
  {name: 'Cumulative Vaccinations', filterTerm: 'cumPeopleVaccinatedCompleteByPublishDate', category: 'vaccine', id: 8}
]

export { nations, utlas, ltlas, dataPoints };
