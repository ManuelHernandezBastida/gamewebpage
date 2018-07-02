#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    http://shiny.rstudio.com/
#

library(shiny)
library(dplyr)
library(lubridate)
library(ggplot2)
library(RMySQL)

mychannel <- dbConnect(RMySQL::MySQL(),dbname= "rest", port=3306, user="root",host="localhost")
query <- function(...) dbGetQuery(mychannel, ...)
usuarios <- query("SELECT * FROM user")

vivienda <-  read.table (
  file = "data/household_hourly_power_consumption.txt",
  header = TRUE,
  dec = ".",
  sep = ";",
  stringsAsFactors = FALSE)

vivienda  <- vivienda %>%
  mutate(
    date_hour = ymd_hms(date_hour),
    anyo = year(date_hour),
    mes = month(date_hour),
    dia_mes = day(date_hour),
    dia_semana = wday(date_hour, label=TRUE, abbr= FALSE),
    dia_anyo = yday(date_hour),
    hora = hour(date_hour))

# Define UI for application that draws a histogram
ui <- fluidPage(
   
   # Application title
   titlePanel("Version 1"),
   h3(usuarios),
   # Input date range
   dateRangeInput("dates", label = h3("Escoja un rango de fecha"), start = "2006-12-16", end = "2010-11-26"),
   
   hr(),
  
   # Show a plot of the generated distribution
    mainPanel(
         plotOutput("distPlot")
      )
   )


# Define server logic required to draw a histogram
server <- function(input, output) {
   
   output$distPlot <- renderPlot({
     p <-   vivienda %>%
       filter(date_hour >= input$dates[1] & 
                date_hour <= input$dates[2]) %>% 
       ggplot(
         aes(x = date_hour, y = global_active_power )) +
       geom_line(color = "blue") +
       labs(title = 'Evolución temporal de la potencia global activa consumida',
            x = 'Fecha', y ='Potencia global activa (kW)')
     p
   })
}

# Run the application 
shinyApp(ui = ui, server = server)

