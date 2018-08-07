package com.cucumber.Selenium;

import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static java.lang.Thread.*;

public class SeleniumFunctions {

	public static WebDriver driver = null;
	public static WebDriverWait waitVar = null;

	public static String baseURL = "https://github.com/";

	public void createDriver() throws MalformedURLException, InterruptedException {

		System.setProperty("webdriver.chrome.driver","/Users/shajidissa/Downloads/chromedriver");
		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		//driver.get(baseURL);

		waitVar = new WebDriverWait(driver, 15);
	}

	public void teardown() {
		driver.quit();
	}

	public void ishomepageDisplayed() {
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Sign in")));

		driver.findElement(By.linkText("Sign in")).isDisplayed();
		//driver.findElement(By.className("marketing-section-signup")).isDisplayed();
	}

	public void clickSigninLink() {
		driver.findElement(By.linkText("Sign in")).click();
	}

	public void isloginsectionDisplayed() {
		WebElement name = driver.findElement(By.id("login_field"));
		name.sendKeys("shajidissa");

//		try {
//			sleep(50000);
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}

		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.className("auth-form-body")));
		waitVar.until(ExpectedConditions.presenceOfElementLocated(By.name("commit")));

	}

	public void sethomepage() {
		driver.get(baseURL);
	}

	public void setloginpage() {
		driver.get(baseURL+"login");
	}

	public void isloginpageDisplayed() {
		//waitVar.until(ExpectedConditions.presenceOfElementLocated(By.linkText("Sign in")));

		//driver.findElement(By.linkText("Sign in")).isDisplayed();
	}

}