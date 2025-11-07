# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copiar los archivos de proyecto y restaurar dependencias
COPY *.csproj ./
RUN dotnet restore

# Copiar el resto del proyecto y compilar
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# Copiar los archivos publicados desde el stage de build
COPY --from=build /app/publish .

# Exponer el puerto que Render usará (puede ser cualquier puerto, Render ajusta PORT automáticamente)
ENV ASPNETCORE_URLS=http://+:$PORT
EXPOSE $PORT

# Comando para ejecutar la app
ENTRYPOINT ["dotnet", "Episense.dll"]
