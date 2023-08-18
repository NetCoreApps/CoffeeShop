FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /app

COPY . .
RUN dotnet restore

WORKDIR /app/CoffeeShop
RUN dotnet publish -c release -o /out --no-restore

RUN --mount=type=secret,id=googlecloud_credentials_file,dst=/out/googlecloud-credentials.json

FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal AS runtime

# install node.js
RUN apt-get clean && apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends curl gnupg \
    && curl -sL https://deb.nodesource.com/setup_current.x | bash - \
    && apt-get install nodejs -yq

WORKDIR /app
COPY --from=build /out ./
ENTRYPOINT ["dotnet", "CoffeeShop.dll"]
